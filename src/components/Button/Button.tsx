import {
    Button
  } from '@chakra-ui/react'

export const ButtonComponent = ({onclick}: {onclick?: () => void}) => {
    return(
        <Button colorScheme='teal' size='sm' width='100%' marginTop='5px' onClick={onclick}>
            Button
        </Button>
    )
}