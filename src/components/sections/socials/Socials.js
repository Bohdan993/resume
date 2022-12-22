import HeadMainContent from "../../headMainContent/HeadMainContent";
import FormSocials from "./FormSocials";

const Socials = () => {

   return (
      <>
         <HeadMainContent
            title={'Social Links'}
            description={`You can add links to websites you want hiring managers to see!  
            \nPerhaps It will be a link to your portfolio, LinkedIn profile, or personal website`}
         >
         </HeadMainContent>
         <FormSocials></FormSocials>
      </>
   )
}

export default Socials;