/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import {
  Box, Container, Flex,  Button,
  Heading, Paragraph,
  BackgroundGradient
} from 'atomic'

import UPortAttestAddressForm from 'features/uport/UPortAttestAddressForm'
import UPortAttestEvent from 'features/uport/UPortAttestEvent'
import EventsList from 'features/Events/EventsList'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Box align='center' justify='center' py={100} >
  <Container mt={25} w={[860]} >
    <UPortAttestAddressForm/>
    <UPortAttestEvent/>
    <EventsList/>
  </Container>
</Box>