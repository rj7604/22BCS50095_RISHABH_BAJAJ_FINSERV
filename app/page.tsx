import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>22BCS50095</title> {/* Change to your roll number */}
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
