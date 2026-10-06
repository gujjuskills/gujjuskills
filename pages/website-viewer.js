import { useRouter } from "next/router";

const websites = {
  HTML_EDITOR: {
    name: "Website 1",
    url: "https://onecompiler.com/html",
  },

  LINUX_CMD: {
    name: "Website 2",
    url: "https://webterm.app/en/free-play",
  },

  PYTHON_EDITOR: {
    name: "Website 3",
    url: "https://onecompiler.com/python",
  },
};

export default function WebsiteViewer() {
  const router = useRouter();

  const site = router.query.site;
  const website = websites[site];

  if (!router.isReady) {
    return (
      <div className="container py-10">
        Loading...
      </div>
    );
  }

  if (!website) {
    return (
      <div className="container py-10">
        <h1>Website not found</h1>
      </div>
    );
  }

  return (
    <div className="container py-6">

      <h1 className="mb-5 text-2xl font-bold">
        {website.name}
      </h1>

      <iframe
        src={website.url}
        title={website.name}
        style={{
          width: "100%",
          height: "80vh",
          minHeight: "600px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          display: "block",
        }}
      />

    </div>
  );
}
