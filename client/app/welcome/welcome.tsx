"use client";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export function Welcome() {
  return (
    <main>
      <h1>Ceci est un test !</h1>

      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button color="secondary">Secondary</Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
      </Stack>
    </main>
  );
}
