export interface ValidationErrors {
  errorMessage: string;
  field_errors: Record<string, string>;
}
export default ValidationErrors;
