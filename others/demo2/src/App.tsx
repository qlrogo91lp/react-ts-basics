import Button from "./components/Button";
import Form from "./components/Form";
import Input from "./components/Input-basic";

function App() {
    const handleSave = (data: unknown) => {
      // number 타입이어도 string으로 저장됨
      // type casting
      const extractedData = data as { name: string; age: string};
      console.log(extractedData);
    };
    
    return (
        <main>
          <Form onSave={handleSave}>
            <Input type="text" label="Name" id="name"/>
            <Input type="number" label="Age" id="age"/>  
            <p>
              <Button>Save</Button>
            </p>
          </Form>
        </main>
    );
}

export default App;
