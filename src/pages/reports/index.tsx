import { BasicLayout } from "@/layouts/basic";
import { useEffect } from "react";
import { mount, unmount } from "reportsApp/reportsApp";

const ReportsPage = () => {
  useEffect(() => {
    unmount?.();

    let container = document.getElementById("angular-root");
    if (!container) {
      container = document.createElement("div");
      container.id = "angular-root";
      document.body.appendChild(container);
    }

    mount?.();
  }, []);

  return (
    <div id="angular-root">
      <app-root></app-root>
    </div>
  );
};

export default ReportsPage;

ReportsPage.getLayout = function getLayout(page: React.ReactElement) {
  return <BasicLayout>{page}</BasicLayout>;
};
