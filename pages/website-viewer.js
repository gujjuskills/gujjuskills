import { useRouter } from "next/router";

const websites = {
  website1: {
    name: "html",
    url: "https://onecompiler.com/html"
  },

  website2: {
    name: "Website 2",
    url: "https://example.org"
  },

  website3: {
    name: "Website 3",
    url: "https://example.net"
  }
};

export default function WebsiteViewer() {
  const router = useRouter();

  const site = router.query.site;
  const website = websites[site];

  if (!website) {
    return (
      <div className="container py-10">
        <h1>Website not found</h1>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <h1 className="mb-5 text-3xl font-bold">
        {website.name}
      </h1>

      <iframe
        src={website.url}
        title={website.name}
        style={{
          width: "100%",
          height: "800px",
          border: "none"
        }}
      />
    </div>
  );
}
