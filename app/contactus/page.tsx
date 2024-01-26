/* eslint-disable @next/next/no-img-element */
import { FormItem, FormLabel, FormMessage } from '@/components/form';
import { Icons } from '@/components/icons';
import { InputWithButton } from '@/components/input-with-button';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';

export default function ContactUsPage() {
  return (
    <>
      <div>
        <div className="relative h-[100px]">
          <div className="w-full h-full relative bg-blend-screen bg-opacity-50 bg-gray-500/5"></div>
          <img
            src="https://www.theresearchinsights.com/images/banner2.webp"
            alt="about banner"
            className={
              'w-full h-full object-cover object-center absolute top-0 left-0 aspect-square'
            }
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
            <InputWithButton className="min-w-[max-content]" />
          </div>
        </div>
        <div className="bg-[#413c69] px-8 py-4 text-white gap-2 flex items-center">
          <span>
            <Link href="/" className="text-[#b0e0e6]">
              HOME
            </Link>
          </span>
          <span>/</span>
          <span>CONTACT US</span>
        </div>
      </div>
      <div className="bg-gray-100 mb-8">
        <div className="container py-8 grid md:grid-cols-2">
          <div className="bg-white p-4 md:p-3">
            <h2 className="text-3xl mb-8 font-bold leading-8 text-center">
              Have Questions? Reach Out to Us
            </h2>
            <div>
              <form
                name="contactUsForm"
                className="grid gap-4 place-items-center"
              >
                <FormItem>
                  {/* <div className="flex flex-col gap-2"> */}
                    <FormLabel htmlFor="name">Full Name</FormLabel>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                    />
                  {/* </div> */}
                </FormItem>
                <FormItem>
                  {/* <div className="flex flex-col gap-2"> */}
                    <FormLabel htmlFor="email">Email Address</FormLabel>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                    <FormMessage />
                  {/* </div> */}
                </FormItem>
                <FormItem>
                  {/* <div className="flex flex-col gap-2"> */}
                    <FormLabel htmlFor="mobile">Phone No.</FormLabel>
                    <Input
                      type="text"
                      name="mobile"
                      placeholder="Phone no"
                      required
                    />
                  {/* </div> */}
                </FormItem>
                <FormItem>
                  {/* <div className="flex flex-col gap-2"> */}
                    <FormLabel htmlFor="message">Message</FormLabel>
                    <Textarea name="message" placeholder="Message" required />
                  {/* </div> */}
                </FormItem>
                <FormItem>
                  <Button>Send Message</Button>
                </FormItem>
              </form>
            </div>
          </div>
          <Card
            className="bg-[#3ba7e0] text-white p-4 md:p-3 rounded-none"
            style={{ overflowWrap: 'anywhere' }}
          >
            <CardHeader className="pb-4 p-1 md:p-6">
              <CardTitle className="text-2xl font-bold">
                Let&apos;s get in touch
              </CardTitle>
              <CardDescription className="text-white">
                We&apos;re open for any suggestion or just to have a chat
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 p-1 md:p-6">
              <div className="flex items-center space-x-2">
                <div className="border-2 border-gray-300 p-2 rounded-[50%] flex items-center">
                  <Icons.map className="h-6 w-6 text-white" />
                </div>
                <span>
                  Address: 1331 Johnson Dr, Buffalo, Grove.illinois, Chicago,
                  USA.
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="border-2 border-gray-300 p-2 rounded-[50%] flex items-center">
                  <Icons.map className="h-6 w-6 text-white" />
                </div>
                <span>
                  Address: 2nd floor, Arth Vishwa Complex, Lane no-5, Koregaon
                  Park, Pune-411001
                </span>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <div className="border-2 border-gray-300 p-2 rounded-[50%] flex items-center">
                    <Icons.phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p>Phone:</p>
                    <p>
                      <a href="tel:+918956446619" title="The Research Insights">
                        +91-89564-46619
                      </a>
                    </p>
                    <p>
                      <a href="tel:+918956446619" title="The Research Insights">
                        +91-89564-46619
                      </a>
                    </p>
                    <p>
                      <a href="tel:+918956446619" title="The Research Insights">
                        +91-89564-46619
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="border-2 border-gray-300 p-2 rounded-[50%] flex items-center">
                  <Icons.send className="h-6 w-6 text-white" />
                </div>
                <span>
                  Email:
                  <a
                    href="mailto:sales@theresearchinsights.com"
                    title="The Research Insights"
                  >
                    sales@theresearchinsights.com
                  </a>
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
