import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
    width: 330px;
    height: 490px;
    background-color: ${({ theme }) => theme.card};
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
    overflow: hidden;
    transition: all 0.5s ease-in-out;
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 14px;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
        filter: brightness(1.1);
    }
`;

const Image = styled.img`
    width: 100%;
    height: 180px;
    background-color: ${({ theme }) => theme.white};
    border-radius: 10px;
    object-fit: cover;
    box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;

const Tags = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
    align-items: center;
`;

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`;

const Members = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
`;

const Tag = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary + 15};
    padding: 2px 8px;
    border-radius: 10px;
`;

const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    margin-left: 2px;
    color: ${({ theme }) => theme.text_secondary + 80};

    @media (max-width: 768px) {
        font-size: 10px;
    }
`;

const Description = styled.div`
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 99};
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    margin-top: 8px;
    max-width: 100%;
`;

const Avatar = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin-left: -10px;
    background-color: ${({ theme }) => theme.white};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border: 3px solid ${({ theme }) => theme.card};
`;

const LinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 14px;
    margin: 0;
`;

const Links = styled.div`
    display: flex;
    color: ${({ theme }) => theme.primary};
    position: relative;
    bottom: 0px;
    font-size: 0.7em;
    cursor: pointer;
    border: 1.8px solid ${({ theme }) => theme.primary};
    border-radius: 8px;
    padding: 2px;
    &:hover {
        transform: scale(1.2);
        box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
        filter: brightness(1.1);
        transition: ease-in-out 0.2s;
        color: ${({ theme }) => theme.white};
    }
`;

function ProjectCard({ project }) {
    return (
        <Card>
            <Image src={project.image} />
            <Tags>
                {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                ))}
            </Tags>
            <Details>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
                <Description>{project.description}</Description>
            </Details>
            <Members>
                {project.member?.map((members) => (
                    <Avatar src={members.img} />
                ))}
            </Members>
            <LinksContainer>
                {project.github && (
                    <Link
                        to={project.github}
                        style={{
                            textDecoration: "none",
                        }}
                    >
                        <Links>GitHub Repo</Links>
                    </Link>
                )}
                {project.webapp && (
                    <Link
                        to={project.webapp}
                        style={{
                            textDecoration: "none",
                        }}
                    >
                        <Links>Website</Links>
                    </Link>
                )}
            </LinksContainer>
        </Card>
    );
}

export default ProjectCard;
