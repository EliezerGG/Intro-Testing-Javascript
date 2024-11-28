describe('Set', ()=>{
  beforeAll(()=> {
    console.log('beforeAll')
    // up db
  })
  afterAll(()=>{
    console.log('afterfAll')
    // down db
  })
  beforeEach(()=>{
    console.log('BeforeEach');
  })
  afterEach(()=>{
    console.log('BeforeEach');
  })
  test('case 1', ()=>{

    expect(1+1).toBe(2)
  })
  test('case 2', ()=>{
    expect(1+3).toBe(4);
  })
  describe('other group', ()=>{
    test('case 3', ()=>{
      expect(1+1).toBe(2)
    })
    test('case 4', ()=>{
      expect(1+3).toBe(4);
    })
  })
})
