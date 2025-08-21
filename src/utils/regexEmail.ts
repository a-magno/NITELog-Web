export default function validateEmail(email: string): boolean {
  return (email.trim() !== "" &&
    email &&
    /\S+@\S+\.\S+/.test(email)) as boolean;
}
