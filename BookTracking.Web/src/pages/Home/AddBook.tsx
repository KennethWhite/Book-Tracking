import { useRef, useState } from 'react';
import { Button, FileButton, Group, Slider, Text, Textarea, TextInput } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { useForm } from '@mantine/form';

interface AddBookProps {
  test: string;
}

export const AddBook = () => {
  const [file, setFile] = useState<File | null>(null);
  const resetRef = useRef<() => void>(null);

  const clearFile = () => {
    setFile(null);
    resetRef.current?.();
  };

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      title: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  const ratingMarks = [
    { value: 0, label: 'NR' },
    { value: 10, label: '1' },
    { value: 20, label: '2' },
    { value: 30, label: '3' },
    { value: 40, label: '4' },
    { value: 50, label: '5' },
    { value: 60, label: '6' },
    { value: 70, label: '7' },
    { value: 80, label: '8' },
    { value: 90, label: '9' },
    { value: 100, label: '10' },
  ];

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <TextInput data-autofocus label="Title" placeholder="Title" />
      {/*TODO select for Author, or add*/}
      {/*TODO select for Narrator, or add*/}
      {/* Tags selection*/}
      <DateInput valueFormat="DD/MM/YYYY" label="Date first read" placeholder="Date first read" />
      <DateInput valueFormat="DD/MM/YYYY" label="Date finished" placeholder="Date finished" />
      <TextInput label="Last Read" placeholder="Last read book or chapter" />
      <Textarea placeholder="Notes" label="Notes" autosize minRows={2} />
      <Text>Rating</Text>
      <Slider
        color="blue"
        marks={ratingMarks}
        step={10}
        mb={25}
        label={(value) => `${value / 10}`}
      />
      <Group justify="center">
        <FileButton resetRef={resetRef} onChange={setFile} accept="image/png,image/jpeg">
          {(props) => <Button {...props}>Upload Cover Image</Button>}
        </FileButton>
      </Group>
      {file && (
        <Text size="sm" ta="center" mt="sm">
          Picked file: {file.name}
        </Text>
      )}
      {/* Notes*/}
    </form>
  );
};
