import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default function Profile({ user }) {
    console.log({user})
    console.log(user.user_id)
  return <div>Hello {user.name}</div>;
}































// You can optionally pass your own `getServerSideProps` function into
// `withPageAuthRequired` and the props will be merged with the `user` prop
export const getServerSideProps = withPageAuthRequired();
