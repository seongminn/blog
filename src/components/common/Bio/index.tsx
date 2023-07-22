import { graphql, useStaticQuery } from 'gatsby';

import * as Styled from './style';
import Anchor from '../Anchor';
import Icon from '../Icon';

import { BioType } from '@/types/Bio.types';

const Bio = () => {
  const { file, site }: BioType = useStaticQuery(bioQuery);
  const { publicURL } = file;
  const { author, introduction, social_address } = site.siteMetadata;

  return (
    <Styled.Wrapper>
      <Styled.ProfileImage src={publicURL} alt="profile-image" />
      <Styled.IntroductionBox>
        <Styled.Name>{author}</Styled.Name>
        <Styled.Introduction>{introduction}</Styled.Introduction>
        <Styled.IconBox>
          <Anchor href={social_address.github} aria-label="github">
            <Icon iconName="github" size="22" />
          </Anchor>
          <Anchor href={social_address.instagram} aria-label="instagram">
            <Icon iconName="instagram" />
          </Anchor>
          <Anchor href={social_address.mail} target="_self" aria-label="mail">
            <Icon iconName="email" />
          </Anchor>
        </Styled.IconBox>
      </Styled.IntroductionBox>
    </Styled.Wrapper>
  );
};

const bioQuery = graphql`
  query BioQuery {
    site {
      siteMetadata {
        title
        description
        author
        introduction
        social_address {
          github
          instagram
          mail
        }
      }
    }
    file(name: { eq: "profile-image" }) {
      publicURL
    }
  }
`;

export default Bio;
