declare module "@sanity/block-content-to-react" {
  type Props = {
    blocks: any[];
    projectId: string;
    dataset: string;
    style?: React.CSSProperties;
    className?: string;
  };
  const element: React.FC<Props>;
  export default element;
}
