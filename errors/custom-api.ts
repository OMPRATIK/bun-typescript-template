class CustomAPIError extends Error {
  constructor(message: string, public readonly statusCode: number) {
    super(message);
  }
}

export default CustomAPIError;
