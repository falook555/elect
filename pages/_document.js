import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <div>
                        <link rel="stylesheet" href="/static/plugins/fontawesome-free/css/all.min.css" />
                        {/* Ionicons */}
                        <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
                        {/* Tempusdominus Bbootstrap 4 */}
                        <link rel="stylesheet" href="/static/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css" />
                        {/* iCheck */}
                        <link rel="stylesheet" href="/static/plugins/icheck-bootstrap/icheck-bootstrap.min.css" />
                        {/* JQVMap */}
                        <link rel="stylesheet" href="/static/plugins/jqvmap/jqvmap.min.css" />
                        {/* Theme style */}
                        <link rel="stylesheet" href="/static/dist/css/adminlte.min.css" />
                        {/* overlayScrollbars */}
                        <link rel="stylesheet" href="/static/plugins/overlayScrollbars/css/OverlayScrollbars.min.css" />
                        {/* Daterange picker */}
                        <link rel="stylesheet" href="/static/plugins/daterangepicker/daterangepicker.css" />
                        {/* summernote */}
                        <link rel="stylesheet" href="/static/plugins/summernote/summernote-bs4.css" />
                        {/* Google Font: Source Sans Pro */}
                        <link href="https://fonts.googleapis.com/css?family=Kanit&display=swap" rel="stylesheet"></link>
                    </div>
                    {/* jQuery */}
                    <script src="static/plugins/jquery/jquery.min.js"></script>
                    {/* Bootstrap */}
                    <script src="static/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
                    {/* AdminLTE */}
                    <script src="static/dist/js/adminlte.js"></script>

                    <script src="static/dist/js/demo.js"></script>
                </Head>
                <body className="sidebar-mini sidebar-collapse control-sidebar-open">

                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument