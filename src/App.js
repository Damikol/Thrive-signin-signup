import React from "react";
import * as Components from './Components';
import logoImage from './Assets/Logo.png';

function App() {
    const [signIn, toggle] = React.useState(true);
     return(
         <Components.Container>
             <Components.SignUpContainer signinIn={signIn}>
                 <Components.Form>
                 <Components.LogoContainer>
                 <Components.Logo src={logoImage} alt="Logo" />
                 <Components.LogoText>Thrive</Components.LogoText>
                 </Components.LogoContainer>
                     <Components.Title>Create Account</Components.Title>
                     <Components.Input type='text' placeholder='Name' />
                     <Components.Input type='email' placeholder='Email' />
                     <Components.Input type='password' placeholder='Password' />
                     <Components.Button>Sign Up</Components.Button>
                     <Components.Anchor href='#'>Need help signing up ?</Components.Anchor>
                 </Components.Form>
             </Components.SignUpContainer>

             <Components.SignInContainer signinIn={signIn}>
                  <Components.Form>
                  <Components.LogoContainer>
                  <Components.Logo src={logoImage} alt="Logo" />
                  <Components.LogoText>Thrive</Components.LogoText>
                  </Components.LogoContainer>
                      <Components.Title>Sign in</Components.Title>
                      <Components.Input type='email' placeholder='Email' />
                      <Components.Input type='password' placeholder='Password' />
                      <Components.Button>Sigin In</Components.Button>
                      <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                  </Components.Form>
             </Components.SignInContainer>

             <Components.OverlayContainer signinIn={signIn}>
                 <Components.Overlay signinIn={signIn}>

                 <Components.LeftOverlayPanel signinIn={signIn}>
                 <Components.LogoContainer>
                 <Components.Logo src={logoImage} alt="Logo" />
                 <Components.LogoText>Thrive</Components.LogoText>
                 </Components.LogoContainer>
                     <Components.Title>Welcome Back!</Components.Title>
                     <Components.Paragraph>
                         To keep you connected with us let's get you signed in with your personal info
                     </Components.Paragraph>
                     <Components.GhostButton onClick={() => toggle(true)}>
                         Sign In
                     </Components.GhostButton>
                     <Components.GhostButton onClick={() => toggle(true)}>
                     <Components.GoogleIcon />Continue with google
                     </Components.GhostButton>
                     </Components.LeftOverlayPanel>

                     <Components.RightOverlayPanel signinIn={signIn}>
                     <Components.LogoContainer>
                     <Components.Logo src={logoImage} alt="Logo" />
                     <Components.LogoText>Thrive</Components.LogoText>
                     </Components.LogoContainer>
                       <Components.Title>Hello!</Components.Title>
                       <Components.Paragraph>
                           Enter your personal details and let's get you started with us
                       </Components.Paragraph>
                           <Components.GhostButton onClick={() => toggle(false)}>
                               Create an account
                           </Components.GhostButton>
                           <Components.GhostButton onClick={() => toggle(false)}>
                           <Components.GoogleIcon />Sign up with Google
                           </Components.GhostButton>
                     </Components.RightOverlayPanel>

                 </Components.Overlay>
             </Components.OverlayContainer>

         </Components.Container>
     )
}

export default App;