import Avatar from "../components/Avatar";
import Card from "../components/Card";
import CardBody from "../components/CardBody";
import CardHeader from "../components/CardHeader";
import Page from "../components/Page";
import PageBody from "../components/PageBody";
import PageHeader from "../components/PageHeader";
import Typography from "../components/Typography";
import { useUserInfo } from "../hooks/useAuth";

export default function Profile() {
  const { data } = useUserInfo("AUTHKEY123");

  return (
    <Page>
      <PageHeader>
        <div className="flex items-center">
          <Avatar className="mr-4"></Avatar>
          <div className="flex-grow">
            <Typography
              bold
            >{`${data?.firstName} ${data?.lastName}`}</Typography>
            <Typography muted small>
              {data?.role}
            </Typography>
          </div>
        </div>
      </PageHeader>
      <PageBody>
        <Card>
          <CardHeader title="User Information" />
          <CardBody>
            <Typography bold muted small>
              First Name
            </Typography>
            <Typography bold>{data?.firstName}</Typography>
          </CardBody>
        </Card>
      </PageBody>
    </Page>
  );
}
