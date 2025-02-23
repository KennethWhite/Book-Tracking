import { Button, Overlay } from '@mantine/core';

interface AddBookProps {
  onClose: () => void;
}

export const AddBook = ({ onClose }: AddBookProps) => {
  return (
    <Overlay center>
      <div>
        <h1>Add Book</h1>
        <Button onClick={onClose}>Close</Button>
      </div>
    </Overlay>
  );
};
