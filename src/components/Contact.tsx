import AnimateTitle from "./AnimateTitle";
import Button from "./Button";

interface ImageClipBoxProps {
  src: string;
  clipClass: string;
}

const ImageClipBox = ({ src, clipClass }: ImageClipBoxProps) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen  px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src={import.meta.env.VITE_CONTACT_IMAGE_1_URL}
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src={import.meta.env.VITE_CONTACT_IMAGE_2_URL}
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src={import.meta.env.VITE_SWORDMAN_PARTIAL_URL}
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src={import.meta.env.VITE_SWORDMAN_URL}
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            Let's Connect
          </p>

          <AnimateTitle
            title="Ready to br<b>i</b>ng your <br /> ideas to <br /> l<b>i</b>fe together?"
            containerClass="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          <div className="mt-8 max-w-md text-center">
            <p className="mb-4 text-blue-50/80">
              I'm always excited to work on new projects and collaborate with talented individuals. 
              Let's discuss how we can create something amazing together.
            </p>
            <p className="text-sm text-blue-50/60">
              📧 {import.meta.env.VITE_EMAIL}
            </p>
          </div>

          <Button 
            title="Get In Touch" 
            containerClass="mt-10 cursor-pointer" 
            onClick={() => window.location.href = `mailto:${import.meta.env.VITE_EMAIL}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
