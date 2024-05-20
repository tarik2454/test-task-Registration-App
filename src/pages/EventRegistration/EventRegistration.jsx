import Container from '@/components/Container/Container';
import Section from '@/components/Section/Section';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import RegistrationForm from '@/components/RegistrationForm/RegistrationForm';

export default function EventRegistration() {
  return (
    <Section>
      <Container>
        <SectionTitle title={'Event registration'} />
        <RegistrationForm />
      </Container>
    </Section>
  );
}
