import { BasicLayout } from "@/layouts/basic";
import { Suspense, useEffect, useState } from "react";

const OtherServices = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <Suspense fallback={<div>Carregando...</div>}>
          <div>Investimentos</div>
        </Suspense>
      )}
    </>
  );
};

export default OtherServices;

OtherServices.getLayout = function getLayout(page: React.ReactElement) {
  return <BasicLayout>{page}</BasicLayout>;
};
