import {
  Card,
  CardBody,
  CardHeader,
  CardPoster,
  CardText,
  CardTitle,
  CardFooter,
  Tag,
  Avatar,
  UserBox,
  UserInfo,
  UserName,
  Date,
} from './BlogCard.styled';

import { timeToNow } from 'helpers/formatData';

export const BlogCard = ({
  article: { name, postedAt, poster, tag, title, description, avatar },
}) => {
  return (
    <Card>
      <CardHeader>
        <CardPoster src={poster} alt={tag} />
      </CardHeader>
      <CardBody>
        <Tag>{tag}</Tag>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
      <CardFooter>
        <UserBox>
          <Avatar src={avatar} alt="Jane Doe" />
          <UserInfo>
            <UserName>{name}</UserName>
            <Date>{timeToNow(postedAt)}</Date>
          </UserInfo>
        </UserBox>
      </CardFooter>
    </Card>
  );
};
