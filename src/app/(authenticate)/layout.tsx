import styles from "./layout.module.css";

export default function AuthenticationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.authenticationRoot}>{children}</div>;
}
