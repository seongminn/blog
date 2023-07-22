export type BioType = {
  site: {
    siteMetadata: {
      description: string;
      author: string;
      introduction: string;
      social_address: {
        github: string;
        instagram: string;
        mail: string;
      };
    };
  };
  file: { publicURL: string };
};
