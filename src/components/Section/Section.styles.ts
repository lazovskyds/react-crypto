import styled from 'styled-components';
import { colors } from '@styles/colors';

export const SectionWrapepr = styled.section`
   overflow: hidden;
   border-radius: 4px;
   background-color: ${colors.white};
`;

export const SectionInner = styled.div`
   padding: 16px;
`;

export const SectionHead = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: flex-end;
`;

export const SectionTitle = styled.h3`
   font-size: 18px;
   font-weight: 600;
   line-height: 1;
   margin: 0;
`;

export const SectionContent = styled.div`
   padding: 0 16px 16px 16px;
`;
