import { HeroHeader } from "@/components/hero-header";
import { formatAndDelivery } from "@/data/helpdesk";
import { templating } from "@/utils/template";

const Page = () => {
  return (
    <>
      <HeroHeader title="PAYMENT OPTION" />
      <div className="container max-w-screen-xl py-6 px-12">
        <div className="mb-2">
          <h2 className="font-bold text-2xl mb-2 leading-[1.5]">
            How To Order?
          </h2>
          <ul className="list-disc px-12">
            <li className="mb-4 text-base leading-[1.8] font-medium">E-mail</li>
            <li className="mb-4 text-base leading-[1.8] font-medium">
              Telephone
            </li>
          </ul>
          <p className="mb-4 text-base leading-[1.8] font-medium py-1 px-2">
            {formatAndDelivery.authorizationNote}
          </p>
        </div>
        <ul>
          {formatAndDelivery.methods.map((item) => (
            <li key={item.name} className="mb-2">
              <h2 className="font-bold text-2xl mb-2 leading-[1.5]">
                To Order by {item.name}:
              </h2>
              <p
                className="text-base leading-[1.8] font-medium py-1 px-2"
                dangerouslySetInnerHTML={{
                  __html: templating(
                    item.description,
                    item.name === "Email" ? "mailto" : "tel"
                  ),
                }}
              />
            </li>
          ))}
          <li>
            <p className="flex flex-col gap-1 mb-4 text-base leading-[1.8] font-medium py-1 px-2">
              <span>
                At Expert Market Insights, the data we furnish is available in
                the PDF format.
              </span>{" "}
              <span>
                {" "}
                If you require data in any other specific formats, please reach
                out to us, and we will assist you further based on feasibility.{" "}
              </span>
              <span>Delivery Timeline: 5 to 7 Business Days. </span>
              <span>
                (In case of any changes in requirements or specific updates from
                the client side, the delivery time frame can exceed until the
                appropriate sign off.)
              </span>
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

Page.displayName = "PaymentOptionsPage";

export default Page;
