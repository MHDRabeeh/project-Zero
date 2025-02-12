import { EditOutlined, DeleteOutlined, MessageOutlined } from "@ant-design/icons";
import { Table, Button, Typography, Space, Tag, Row, Col } from "antd";
import { useState } from "react";
import EditIssueDrawer from "../components/EditeIssueDrawer";
import { Filter } from "lucide-react";

const { Title } = Typography;

const IssueLog = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    // Function to generate random date and time
    const generateRandomDate = () => {
        const start = new Date(2020, 0, 1).getTime();
        const end = new Date().getTime();
        const randomDate = new Date(start + Math.random() * (end - start));
        return randomDate.toLocaleString();
    };

    const columns = [
        {
            title: "#",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Ticket No",
            dataIndex: "ticketNo",
            key: "ticketNo",
        },
        {
            title: "Client",
            dataIndex: "client",
            key: "client",
        },
        {
            title: "Region",
            dataIndex: "region",
            key: "region",
        },
        {
            title: "Issue Classification",
            dataIndex: "classification",
            key: "classification",
        },
        {
            title: "Issue Details",
            dataIndex: "details",
            key: "details",
        },
        {
            title: "Shift Handled by",
            dataIndex: "handledBy",
            key: "handledBy",
        },
        {
            title: "Issue Assigned To",
            dataIndex: "assignedTo",
            key: "assignedTo",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (status) => (
                <Tag color={status === "Pending" ? "red" : "green"}>{status}</Tag>
            ),
        },
        {
            title: "Date",
            dataIndex: "date",
            key: "date",
            render: (date) => <span>{date}</span>,
        },
        {
            title: "Actions",
            key: "actions",
            render: () => (
                <Space>
                    <Button type="link" icon={<EditOutlined />} onClick={toggleDrawer} />
                    <Button type="link" icon={<DeleteOutlined />} danger />
                </Space>
            ),
        },
        {
            title: "Comment",
            key: "comment",
            render: () => <Button type="link" icon={<MessageOutlined />} />,
        },
    ];

    const dataOne = [
        {
            id: 1,
            ticketNo:"A7X9B3Q5",
            client: "Mark",
            region: "Otto",
            classification: "@mdo",
            details: "Some issue details",
            handledBy: "Otto",
            assignedTo: "Mark",
            status: "Pending",
            date: generateRandomDate(),
        },
        {
            id: 2,
            ticketNo:"A7X9B3Y67",
            client: "John",
            region: "Doe",
            classification: "@jdo",
            details: "More issue details",
            handledBy: "Jane",
            assignedTo: "John",
            status: "Pending",
            date: generateRandomDate(),
        },
    ];

    const datatwo = [
        {
            id: 1,
            ticketNo:"A7X9B3YT",
            client: "Mark",
            region: "Otto",
            classification: "@mdo",
            details: "Some issue details",
            handledBy: "Otto",
            assignedTo: "Mark",
            status: "Completed",
            date: generateRandomDate(),
        },
        {
            id: 2,
            ticketNo:"A7X9B3Y67",
            client: "John",
            region: "Doe",
            classification: "@jdo",
            details: "More issue details",
            handledBy: "Jane",
            assignedTo: "John",
            status: "Completed ",
            date: generateRandomDate(),
        },
    ];

    return (
        <div>
            <div style={{ marginBottom: 20 }}>

                <Row justify="space-between" align="middle" className="px-2">
                    <Col>
                        <Title level={3} style={{ color: "#1890ff" }}>Pending Issues</Title>
                    </Col>
                    <Col>
                        <button className="flex items-center bg-white mb-1 text-[#1890ff] px-4 py-2 rounded-md hover:bg-cyan-100 transition-colors">
                            <Filter size={18} className="mr-2" />Filter
                        </button>
                    </Col>
                </Row>
                <Table columns={columns} dataSource={dataOne} rowKey="id" pagination={{ pageSize: 5 }} />
            </div>

            <div>
            <Row justify="space-between" align="middle" className="px-2">
                    <Col>
                        <Title  level={3} style={{ color: "#52c41a" }}>Resolved Issues</Title>
                    </Col>
                    <Col>
                        <button className="flex items-center bg-white mb-1 text-[#1890ff] px-4 py-2 rounded-md hover:bg-cyan-100 transition-colors">
                            <Filter size={18} className="mr-2" />Filter
                        </button>
                    </Col>
                </Row>
                <Table columns={columns} dataSource={datatwo} rowKey="id" pagination={{ pageSize: 5 }} />
            </div>
            

            {/* <Drawer
                title="Editing Issue"
                placement="right"
                width={400}
                onClose={toggleDrawer}
                open={isDrawerOpen}
            >
                <p>Edit issue details here...</p>
            </Drawer> */}
            <EditIssueDrawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
        </div >
    );
};

export default IssueLog;
