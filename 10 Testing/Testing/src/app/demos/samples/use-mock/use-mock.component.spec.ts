import { UseMockComponent } from "./use-mock.component";

describe("UseMockComponent", () => {
  let component: UseMockComponent;
  let mockservice = {
    private isAuth: true,
    isAuthenticated: () => true,
    logIn(): ()=>{},
    logOff(): ()=>{}
  };

  beforeEach(() => {
    component = new UseMockComponent(mockservice);    
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should return Authenticated true", () => {
    expect(component.loggedIn).toBe(true);
  });
});
