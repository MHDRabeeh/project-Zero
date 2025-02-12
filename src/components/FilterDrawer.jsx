
import { Drawer, Form, Select, Input, Button, DatePicker } from "antd";
import { useState } from "react";

const { Option } = Select;

const FilterDrawer = ({ isOpen, onClose, onApplyFilters }) => {
    const [filters, setFilters] = useState({
        ticketNo: "",
        client: "",
        region: "",
        classification: "",
        details: "",
        handledBy: "",
        assignedTo: "",
        status: "",
        date: null,
    });

    const handleApplyFilters = () => {
        onApplyFilters(filters);
        onClose();
    };

    return (
        <Drawer title="Filter Issues" placement="right" width={350} onClose={onClose} open={isOpen}>
            <Form layout="vertical">
                <Form.Item label="Ticket No">
                    <Input
                        placeholder="Enter ticket number"
                        value={filters.ticketNo}
                        onChange={(e) => setFilters({ ...filters, ticketNo: e.target.value })}
                    />
                </Form.Item>

                <Form.Item label="Client">
                    <Input
                        placeholder="Enter client name"
                        value={filters.client}
                        onChange={(e) => setFilters({ ...filters, client: e.target.value })}
                    />
                </Form.Item>

                <Form.Item label="Region">
                    <Input
                        placeholder="Enter region"
                        value={filters.region}
                        onChange={(e) => setFilters({ ...filters, region: e.target.value })}
                    />
                </Form.Item>

                <Form.Item label="Issue Classification">
                    <Input
                        placeholder="Enter classification"
                        value={filters.classification}
                        onChange={(e) => setFilters({ ...filters, classification: e.target.value })}
                    />
                </Form.Item>

                <Form.Item label="Issue Details">
                    <Input
                        placeholder="Enter details"
                        value={filters.details}
                        onChange={(e) => setFilters({ ...filters, details: e.target.value })}
                    />
                </Form.Item>

                <Form.Item label="Shift Handled By">
                    <Input
                        placeholder="Enter handler"
                        value={filters.handledBy}
                        onChange={(e) => setFilters({ ...filters, handledBy: e.target.value })}
                    />
                </Form.Item>

                <Form.Item label="Issue Assigned To">
                    <Input
                        placeholder="Enter assignee"
                        value={filters.assignedTo}
                        onChange={(e) => setFilters({ ...filters, assignedTo: e.target.value })}
                    />
                </Form.Item>

                <Form.Item label="Status">
                    <Select
                        value={filters.status}
                        onChange={(value) => setFilters({ ...filters, status: value })}
                    >
                        <Option value="">All</Option>
                        <Option value="Pending">Pending</Option>
                        <Option value="Completed">Completed</Option>
                    </Select>
                </Form.Item>

                <Form.Item label="Date">
                    <DatePicker
                        style={{ width: "100%" }}
                        value={filters.date}
                        onChange={(date, dateString) => setFilters({ ...filters, date: dateString })}
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" onClick={handleApplyFilters}>
                        Apply Filters
                    </Button>
                    <Button style={{ marginLeft: 8 }} onClick={() => setFilters({
                        ticketNo: "",
                        client: "",
                        region: "",
                        classification: "",
                        details: "",
                        handledBy: "",
                        assignedTo: "",
                        status: "",
                        date: null,
                    })}>
                        Reset
                    </Button>
                </Form.Item>
            </Form>
        </Drawer>
    );
};

export default FilterDrawer;

