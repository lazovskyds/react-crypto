import React from 'react';
import {
   SectionWrapepr,
   SectionInner,
   SectionHead,
   SectionTitle,
   SectionContent,
} from './Section.styles';

interface SectionProps {
   title: string;
   children: JSX.Element;
}

const Section = ({ title, children }: SectionProps) => {
   return (
      <SectionWrapepr>
         <SectionInner>
            <SectionHead>
               <SectionTitle>{title}</SectionTitle>
            </SectionHead>
         </SectionInner>
         <SectionContent>{children}</SectionContent>
      </SectionWrapepr>
   );
};

export default Section;
