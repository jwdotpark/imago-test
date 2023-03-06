import { useState, useEffect } from "react"
import {
  Button,
  Center,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { CloseIcon } from "@chakra-ui/icons"

const SearchInput = () => {
  const CloseBtnClicked = () => {
    reset({ search: "" })
  }

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        resolve()
      }, 3000)
    })
  }

  return (
    <Center h="100%" w="100%">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.search}>
          <InputGroup w="80vw">
            <Input
              w="100%"
              bg="#fff"
              borderRadius="none"
              disabled={isSubmitting}
              id="search"
              placeholder="Search.."
              {...register("search", {
                required: "This is required",
                minLength: { value: 2, message: "Minimum length should be 2" },
              })}
            />
            <InputRightElement color="gray.600" fontSize="1.2em">
              <Button size="xs" variant="ghost" onClick={CloseBtnClicked}>
                <CloseIcon />
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>
            {errors.search && errors.search.message}
          </FormErrorMessage>
        </FormControl>
      </form>
    </Center>
  )
}

export default SearchInput
