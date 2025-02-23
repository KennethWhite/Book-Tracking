import { Flex, TextInput } from '@mantine/core';

interface AddBookProps {
  test: string;
}

export const AddBook = ({ test }: AddBookProps) => {
  return (
    <Flex columnGap={10} align="end" justify="center">
      <TextInput label="First input" placeholder={test} />
      <TextInput
        data-autofocus
        label="Input with initial focus"
        placeholder="It has data-autofocus attribute"
        mt="md"
      />
    </Flex>
  );
};
