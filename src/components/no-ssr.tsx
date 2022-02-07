import dynamic from 'next/dynamic';

type Props = {
  children: React.ReactNode;
};

const NoSsr = (props: Props) => <>{props.children}</>;

// eslint-disable-next-line import/no-default-export
export default dynamic(() => Promise.resolve(NoSsr), { ssr: false });
