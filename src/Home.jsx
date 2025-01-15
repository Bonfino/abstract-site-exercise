import "./Home.css";

export default function Home() {
  return (
    <div className="flex mt-32 mx-32 flex-wrap justify-center">
      <div class="item">
        <h3>Using Abstract</h3>
        <p>
          Abstract lets you manage, version, and document your designs in one
          place.
        </p>
      </div>
      <div class="item">
        <h3>Manage your account</h3>
        <p>
          Configure your account settings, such as your email, profile details,
          and password.
        </p>
      </div>
      <div class="item">
        <h3>
          Manage organizations, teams, and projects
        </h3>
        <p>
          Use Abstract organizations, teams, and projects to organize your
          people and your work.
        </p>
      </div>
      <div class="item">
        <h3>Manage billing</h3>
        <p>Change subscriptions and payment details.</p>
      </div>
      <div class="item">
        <h3>Authenticate to Abstract</h3>
        <p>Set up and configure SSO, SCIM, and Just-in-Time provisioning.</p>
      </div>
      <div class="item">
        <h3>Abstract support</h3>
        <p>Get in touch with a human.</p>
      </div>
    </div>
  );
}
