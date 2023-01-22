import { HiUser } from "react-icons/hi";
import Avatar from "../components/Avatar";
import Badge, { BadgeColor } from "../components/Badge";
import Card from "../components/Card";
import CardBody from "../components/CardBody";
import CardHeader from "../components/CardHeader";
import List from "../components/List";
import ListItem from "../components/ListItem";
import Page from "../components/Page";
import PageBody from "../components/PageBody";
import PageHeader from "../components/PageHeader";
import ProgressBar from "../components/ProgressBar";
import ProgressCircle from "../components/ProgressCircle";
import Table from "../components/Table";
import TableBody from "../components/TableBody";
import TableCell from "../components/TableCell";
import TableHead from "../components/TableHead";
import TableRow from "../components/TableRow";
import Typography from "../components/Typography";

const overviews = [
  {
    name: "Users",
    value: "12 500"
  },
  {
    name: "Orders",
    value: "12 500"
  },
  {
    name: "Products",
    value: "12 500"
  },
  {
    name: "Visits",
    value: "12 500"
  }
];

const users = [
  {
    firstName: "John",
    lastName: "Smith",
    job: "Web developer"
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    job: "Designer"
  }
];

const orders = [
  {
    amount: "$234.99",
    createdAt: "07-08-2021",
    id: "202108070001",
    status: "In Progress"
  },
  {
    amount: "$456.99",
    createdAt: "07-08-2021",
    id: "202108070002",
    status: "Done"
  }
];

const statusColorMap: Record<string, BadgeColor> = {
  Done: "success",
  "In Progress": "warning"
};

const targets = [
  {
    name: "Visits",
    value: 90
  },
  {
    name: "Income",
    value: 75
  },
  {
    name: "Orders",
    value: 50
  }
];

export default function Home() {
  return (
    <Page>
      <PageHeader>
        <Typography variant="h1">Home</Typography>
      </PageHeader>
      <PageBody className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {overviews.map((overview) => (
          <Card className="md:col-span-3" key={overview.name}>
            <CardBody>
              <Typography className="mb-2" bold>{overview.value}</Typography>
              <Typography muted smaller>
                {overview.name}
              </Typography>
            </CardBody>
          </Card>
        ))}
        <Card className="md:col-span-12">
          <CardHeader title="Orders"></CardHeader>
          <CardBody>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell head={true}>Date</TableCell>
                  <TableCell head={true}>ID</TableCell>
                  <TableCell head={true}>Status</TableCell>
                  <TableCell head={true}>Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>{order.createdAt}</TableCell>
                    <TableCell>{order.id}</TableCell>
                    <TableCell>
                      <Badge color={statusColorMap[order.status]}>
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{order.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardBody>
        </Card>
        <Card className="md:col-span-4">
          <CardHeader title="Top Users"></CardHeader>
          <CardBody>
            <List>
              {users.map((user, index) => (
                <ListItem
                  avatar={
                    <Avatar>
                      <HiUser />
                    </Avatar>
                  }
                  key={index}
                  subTitle={user.job}
                  title={`${user.firstName} ${user.lastName}`}
                />
              ))}
            </List>
          </CardBody>
        </Card>
        <Card className="md:col-span-4">
          <CardHeader title="Targets"></CardHeader>
          <CardBody>
            {targets.map((target) => (
              <div key={target.name}>
                <div className="flex justify-between items-center mb-1">
                  <Typography bold muted small>
                    {target.name}
                  </Typography>
                  <Typography bold small>{`${target.value}%`}</Typography>
                </div>
                <ProgressBar value={target.value} />
              </div>
            ))}
          </CardBody>
        </Card>
        <Card className="md:col-span-4">
          <CardHeader title="Progress"></CardHeader>
          <CardBody>
            <ProgressCircle />
          </CardBody>
        </Card>
      </PageBody>
    </Page>
  );
}
