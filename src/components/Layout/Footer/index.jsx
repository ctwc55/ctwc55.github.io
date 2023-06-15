import React, { Fragment } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { StructuredText } from 'react-datocms';
import { SectionWrapper, Divider } from '../SharedStyles/Sections';
import { usePageLanguage } from '../../../hooks/usePageLanguage';

const FooterContainer = styled.div`
  display: flex;
  width: var(--globalContainer);
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: var(--globalContainer);

  @media screen and (max-width: 950px) {
    flex-direction: column;
    gap: var(--gapSmall);
  }
`;

const FooterColumnLeft = styled.div`
  font-size: var(--baseS);
  text-align: start;

  & a {
    color: var(--primaryColor);

    @media (hover: hover) {
      text-decoration: underline;
    }
  }
`;

const FooterColumnRight = styled.div`
  font-size: var(--baseS);
  text-align: end;

  & a {
    color: var(--primaryColor);

    @media (hover: hover) {
      text-decoration: underline;
    }
  }
`;

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsFooter {
        nodes {
          id: originalId
          textLeft {
            value
          }
          textRight {
            value
          }
          locale
        }
      }
    }
  `);

  const { pageLanguage } = usePageLanguage();

  const {
    allDatoCmsFooter: { nodes },
  } = data;

  return (
    <SectionWrapper as="footer">
      <Divider top />
      <FooterContainer>
        {nodes
          .filter(({ locale }) => locale === pageLanguage)
          .map(
            ({
              id,
              textLeft: { value: textLeftValue },
              textRight: { value: textRightValue },
            }) => (
              <Fragment key={id}>
                <FooterColumnLeft>
                  <StructuredText data={textLeftValue} />
                </FooterColumnLeft>
                <FooterColumnRight>
                  <StructuredText data={textRightValue} />
                </FooterColumnRight>
              </Fragment>
            )
          )}
      </FooterContainer>
    </SectionWrapper>
  );
};
