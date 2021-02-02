import React from 'react'
import {useForm} from 'react-hook-form'
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  // FormHelperText,
  FormLabel,
  Input,
  // useToast,
} from '@chakra-ui/react'
// import {useTimeout} from 'src/hooks'

export default function HookForm() {
  const {handleSubmit, errors, register, formState} = useForm()

  function validateName(value: string) {
    if (!value) {
      return 'Name is required'
    } else if (value !== 'Naruto') {
      return "Jeez! You're not a fan 😱"
    } else return true
  }

  function onSubmit(values: any) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        resolve()
      }, 3000)
    })
  }

  return (
    <Box color="gray.600">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.name}>
          <FormLabel htmlFor="name">First name</FormLabel>
          <Input
            name="name"
            placeholder="name"
            ref={register({validate: validateName})}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
        <Button
          mt={4}
          colorScheme="teal"
          isLoading={formState.isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Box>
  )
}

// export default function ContactForm() {
//   const [error, setError] = useState(false)
//   const [success, setSuccess] = useState(false)
//   const [pending, setPending] = useState(false)

//   const toast = useToast()
//   const toastIdRef = React.useRef<any>()

//   // function close() {
//   //   if (toastIdRef.current) {
//   //     toast.close(toastIdRef.current)
//   //   }
//   // }

//   function addToast(toastMessage: any) {
//     toastIdRef.current = toast(toastMessage)
//   }

//   useEffect(() => {
//     if (success) {
//       addToast(successToast)
//     } else {
//       addToast(errorToast)
//     }
//   }, [success, error])

//   // const {start} = useTimeout(() => {
//   //   if (error) setError(false)
//   //   if (success) setSuccess(false)
//   //   setOpen(false)
//   // }, 3500)

//   const submitSendgrid = async (email: string) => {
//     setPending(true)
//     const response = await fetch(
//       'https://api.sendgrid.com/v3/marketing/contacts',
//       {
//         headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
//         },
//         method: 'PUT',
//         body: JSON.stringify({
//           list_ids: [],
//           contacts: [{email}],
//         }),
//       },
//     )

//     const data = await response.json()
//     if (data.job_id) {
//       setPending(false)
//       setSuccess(true)
//       start()
//     } else if (data.errors.length) {
//       setPending(false)
//       setError(true)
//       start()
//     }
//     reset()
//   }

//   const {register, handleSubmit, reset} = useForm()

//   const successToast = {
//     title: 'Success!',
//     description: 'You will hear from us soon :)',
//     status: 'success',
//     duration: 4000,
//     isClosable: true,
//   }

//   const errorToast = {
//     title: 'An error occurred.',
//     description: 'Unable to send message',
//     status: 'error',
//     duration: 9000,
//     isClosable: true,
//   }

//   return (
//     <>
//       {/* <FormControl id="email" isRequired>
//         <FormLabel>Email address</FormLabel>
//         <Input inputRef={register} type="email" />
//         <FormHelperText>We'll never share your email.</FormHelperText>
//       </FormControl>
//       <Button mt={4} colorScheme="teal" isLoading={pending} type="submit">
//         Submit
//       </Button> */}
//       {/* <form
//         noValidate
//         onSubmit={handleSubmit((data) => {
//           if (data.email === '') return
//           submitSendgrid(data.email)
//         })}
//       >
//         <TextField
//           inputRef={register}
//           required
//           fullWidth
//           id="email"
//           name="email"
//           autoComplete="email"
//           placeholder="Enter email address"
//           type="email"
//           style={{
//             paddingLeft: 30,
//             width: 316,
//             paddingRight: 30,
//             marginBottom: 6,
//             '@media (maxWidth: 600px)': {
//               width: '100%',
//             },
//           }}
//         />
//         <Button type="submit" disabled={pending}>
//           Notify Me
//         </Button>
//       </form> */}

//     </>
//   )
// }
