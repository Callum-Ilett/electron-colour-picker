import { PageHeading, Typography } from "components";
import Form from "ui/form";

const Settings = () => {
  return (
    <>
      <PageHeading text="Settings" backIcon />

      <Form>
        <Form.Group>
          <Form.Label>Theme:</Form.Label>
          <Form.Control as="select">
            <option>Dark</option>
            <option>Light</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Checkbox label="Open at login" />
        </Form.Group>

        <Form.Group>
          <Form.Checkbox label="Keep on top" />
        </Form.Group>

        <Form.Group style={{ color: "#AEAEAE", marginTop: "48px" }}>
          <Typography>Copy Notifications</Typography>
        </Form.Group>

        <Form.Group>
          <Form.Checkbox label="Show notification when copying colour" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Play Sound:</Form.Label>
          <Form.Control as="select">
            <option>None</option>
          </Form.Control>
        </Form.Group>
      </Form>
    </>
  );
};

export default Settings;
