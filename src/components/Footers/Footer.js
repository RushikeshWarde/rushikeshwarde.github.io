import React from "react";
import { Container } from "reactstrap";

function Footer() {
  return (
    <>
      <footer className="footer">
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet" />
        <Container>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, Rushikesh Warde. All rights reserved.
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
