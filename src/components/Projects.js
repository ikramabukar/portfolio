import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Projects() {
  return (
    <div className="projects" id="projects">
      <h1 className="text-center mt-5">Projects</h1>
      <p className=" lead text-center">Check out my projects</p>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>The Dojo</Card.Title>
            <Card.Text className="text-justify">
              Experience efficient project management at its best with The Dojo
              – your ultimate platform for simplified planning, collaboration,
              and success.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card Game</Card.Title>
            <Card.Text>
              Gather your friends and dive into the exciting world of WildCard,
              where strategy and luck collide in a card game like no other.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Finance Tracker App</Card.Title>
            <Card.Text>
              Take control of your finances with FinancePal, the all-in-one app
              that simplifies budgeting, expense tracking, and investment
              management for a brighter financial future.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}

export default Projects;
