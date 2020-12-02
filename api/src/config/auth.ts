interface IAuthConfig {
  jwt: {
    secret: string;
    expiresIn: string;
  };
}

export default {
  jwt: {
    secret: process.env.AUTH_SECRET || 'default',
    expiresIn: '1d',
  },
} as IAuthConfig;
