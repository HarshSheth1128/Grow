import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "./Button";

storiesOf("Buttons", module).add("Primary", () => <Button>hi</Button>);
