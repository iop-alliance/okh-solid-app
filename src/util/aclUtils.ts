import {
  getSolidDatasetWithAcl,
  getAgentAccessAll,
  Access,
  getPublicAccess,
  hasResourceAcl,
  hasAccessibleAcl,
  createAcl,
  setAgentDefaultAccess,
  saveAclFor,
  setPublicResourceAccess,
  setAgentResourceAccess,
  setPublicDefaultAccess,
} from "@inrupt/solid-client";

export async function fetchAcl(
  url: string,
  possibleFetcher?: any
): Promise<Record<string, Access>> {
  const fetcher = possibleFetcher || fetch;
  const chatWithAcl = await getSolidDatasetWithAcl(url, { fetch: fetcher });
  const accessByAgent = getAgentAccessAll(chatWithAcl);
  const publicAccess = getPublicAccess(chatWithAcl);
  if (!accessByAgent) {
    throw new Error(`Not allowed to access acl for ${url}`);
  }
  if (publicAccess) {
    accessByAgent["public"] = publicAccess;
  }
  return accessByAgent;
}

export async function setAcl(
  url: string,
  webIdAccess: Record<string, Access>,
  possibleFetcher?: any
): Promise<void> {
  const fetcher = possibleFetcher || fetch;
  // Fetch the SolidDataset and its associated ACLs, if available:
  const myDatasetWithAcl = await getSolidDatasetWithAcl(url, {
    fetch: (info, init) => {
      return fetcher(info, init)
    },
  });

  // Obtain the SolidDataset's own ACL, if available,
  // or initialise a new one, if possible:
  if (
    !hasResourceAcl(myDatasetWithAcl) &&
    !hasAccessibleAcl(myDatasetWithAcl)
  ) {
    throw new Error("The current user does not have permission to change access rights to this Resource.");
  }

  let resourceAcl = createAcl(myDatasetWithAcl);
  // Give someone Control access to the given Resource:
  Object.entries(webIdAccess).forEach(([webId, access]) => {
    if (webId === "public") {
      resourceAcl = setPublicDefaultAccess(resourceAcl, access);
      resourceAcl = setPublicResourceAccess(resourceAcl, access);
    } else {
      resourceAcl = setAgentDefaultAccess(resourceAcl, webId, access);
      resourceAcl = setAgentResourceAccess(resourceAcl, webId, access);
    }
  });

  // Now save the ACL:
  await saveAclFor(myDatasetWithAcl, resourceAcl, {
    fetch: (info, init) => {
      return fetcher(info, init);
    },
  });
}