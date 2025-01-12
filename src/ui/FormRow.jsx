

import styled from "styled-components";

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.4rem; /* Spacing between items */

  padding: 1.6rem 0; /* Vertical padding for spacing */
  border-bottom: 1px solid var(--color-grey-100); /* Optional: Divider line */

  &:last-child {
    border-bottom: none; /* Remove bottom border for the last row */
  }

  label {
    font-size: 1.4rem; /* Adjust label font size */
    font-weight: 500;
    color: var(--color-grey-700); /* Text color */
  }

  input {
    width: 100%; /* Take full width */
    padding: 0.8rem 1.2rem; /* Spacing inside input */
    border: 1px solid var(--color-grey-300); /* Input border */
    border-radius: 0.4rem; /* Rounded corners */
    font-size: 1.4rem; /* Input text size */
    color: var(--color-grey-800); /* Text color */
  }

  input:focus {
    outline: none; /* Remove default focus outline */
    border-color: var(--color-blue-500); /* Highlighted border on focus */
    box-shadow: 0 0 0 2px var(--color-blue-200); /* Add subtle focus shadow */
  }
`;

export default FormRow;
