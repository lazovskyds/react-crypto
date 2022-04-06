import React from 'react';
import { Section } from '@components/index';

interface WithSectionProps {
   title: string;
}

const withSection = <T extends object>(Component: React.ComponentType<T>) =>
   class WithLoading extends React.Component<T & WithSectionProps> {
      render() {
         const { title, ...props } = this.props;
         return (
            <Section title={title}>
               <Component {...(props as T)} />
            </Section>
         );
      }
   };

export default withSection;
