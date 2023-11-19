import { useFormInput } from "./UserCounter";

export function MyForm() {
  const { formData, handleInputChange } = useFormInput();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aggiungi la tua logica di invio del modulo qui utilizzando formData.username e formData.password
    console.log('Form submitted with:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
