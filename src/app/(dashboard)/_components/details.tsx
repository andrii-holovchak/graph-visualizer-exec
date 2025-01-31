import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Separator } from "@/components/ui/separator";
import { DetailList } from "@/components/ui/detail-list";
import { Check } from "lucide-react";

export function Details() {
  return (
    <Card className="min-w-40 max-w-[385px] flex-1 overflow-auto">
      <Section title="Description">
        Lorem ipsum dolor sit amet consectetur. Aenean sodales pellentesque
        gravida nibh et magna faucibus. Dui commodo ut metus amet egestas
        habitant viverra. Quisque fusce senectus facilisis non diam leo nulla
        sem pellentesque. Sit in vel sed cursus metus sit fringilla vestibulum.
      </Section>
      <Section title="Extra" className="mt-11">
        Lorem ipsum dolor sit amet consectetur. Tempus a id adipiscing fames
        egestas tellus dis pretium tempus. Justo nisl nisl lorem lectus id
        ornare. Rhoncus in egestas in amet porttitor pellentesque sit. Amet
        gravida integer velit felis. Eu consectetur interdum auctor sed aliquam.
        Eu pulvinar accumsan sed id. Duis a aliquam eu quisque commodo lectus.
        Lectus ipsum velit purus viverra vulputate viverra in nunc nulla.
        Euismod rhoncus mauris urna orci gravida sagittis netus. Amet mus in vel
        etiam. Interdum habitant congue massa in etiam sit. Commodo nibh viverra
        lobortis augue lorem quam lorem suspendisse.
      </Section>
      <Separator className="my-3" />
      <DetailList
        items={[
          {
            label: "Lorem ipsum dolor",
            value: "10/19/2017",
          },
          {
            label: "Lorem ipsum dolor",
            value: "Ut",
          },
          {
            label: "Lorem ipsum dolor",
            value: "Eros",
          },
          {
            label: "Lorem ipsum dolor",
            value: (
              <span className="inline-flex items-center gap-2.5">
                <Check stroke="#08B94E" className="size-4" strokeWidth={3} />
                <span>Yes</span>
              </span>
            ),
          },
          {
            label: "Lorem ipsum dolor",
            value: "Sit",
          },
          {
            label: "Lorem ipsum dolor",
            value: "Lorem ipsum dolor",
          },
          {
            label: "Lorem ipsum dolor",
            value: "Lorem ipsum dolor",
          },
        ]}
      />
      <Separator className="my-3" />
      <span className="font-bold text-[#334155]">Lorem ipsum dolor sit</span>
    </Card>
  );
}
